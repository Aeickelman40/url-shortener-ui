import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import UrlContainer from "./UrlContainer";

describe('UrlContainer', () => {
    let testUrl;
    testUrl = (
        [
            {
                title: "alex",
                long_url: "test2",
                id: 2,
                short_url: "http://localhost:3001/useshorturl/2"
            },
        ]
    )

    it('Should render the  UrlContainer component', () => {
        const { getByText } = render (
            <MemoryRouter><UrlContainer urls ={testUrl}/></MemoryRouter>
        )
        const title = getByText('alex');
        const longUrl = getByText('test2');
        const shortUrl = getByText('http://localhost:3001/useshorturl/2')
        expect(title).toBeInTheDocument();
        expect(longUrl).toBeInTheDocument();
        expect(shortUrl).toBeInTheDocument();
    })
})

