import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import UrlForm from "./UrlForm";

describe('UrlForm', () => {

    it('Should render the UrlForm component', () => {
        const { getByPlaceholderText, getByRole} = render(<MemoryRouter><UrlForm /></MemoryRouter>)
        const titleInput = getByPlaceholderText('Title...')
        const urlInput = getByPlaceholderText('URL to Shorten...')
        const submitButton = getByRole('button')
        expect(titleInput).toBeInTheDocument()
        expect(urlInput).toBeInTheDocument()
        expect(submitButton).toBeInTheDocument()
    })

    it('Should know the value of an input', () => {
        const { getByPlaceholderText} = render(<MemoryRouter><UrlForm /></MemoryRouter>)
        const titleInput = getByPlaceholderText('Title...')
        const urlInput = getByPlaceholderText('URL to Shorten...')
        fireEvent.change(titleInput, { target: { value: 'test title'}})
        fireEvent.change(urlInput, { target: { value: 'test long url'}})
        expect(titleInput).toBeInTheDocument()
        expect(urlInput).toBeInTheDocument()
    })
})