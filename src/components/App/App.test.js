import React from "react";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import App from "./App";
import { getUrls } from '../../apiCalls';
jest.mock('../../apiCalls')

describe('App', () => {
   
  getUrls.mockResolvedValue({
    urls: [{
        "id": 1,
        "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        "short_url": "http://localhost:3001/useshorturl/1",
        "title": "Awesome photo"
    },
    {
        "title": "alex",
        "long_url": "test2",
        "id": 2,
        "short_url": "http://localhost:3001/useshorturl/2"
    },
    {
        "title": "test title",
        "long_url": "lkjljlkjlkjadf long url",
        "id": 3,
        "short_url": "http://localhost:3001/useshorturl/3"
     }]
    })

    it('Should render the App component', () => {
        const { getByText } = render (
            <MemoryRouter><App /></MemoryRouter>
        )
        const title = getByText('URL Shortener')
        expect(title).toBeInTheDocument();
    })

    it('Should show no URLs on the DOM with the initial render', () => {
        const { getByText } = render (
            <MemoryRouter><App /></MemoryRouter>
        )
        const noUrlMessage = getByText('No urls yet! Find some to shorten!')
        expect(noUrlMessage).toBeInTheDocument()
    })

    it('Should show URLs if added', async () => {
        const { getByText } = render (<App />)
        const title = await waitFor(() => getByText('alex'));
        expect(title).toBeInTheDocument();
        const longUrl = await waitFor(() => getByText('test2'));
        expect(longUrl).toBeInTheDocument();
        const shortUrl = await waitFor(() => getByText('http://localhost:3001/useshorturl/2'));
        expect(shortUrl).toBeInTheDocument();
    })

    it('Should show a new url after filling out the submission form', () => {
        const { getByText } = render (<App />)
    })   
})
