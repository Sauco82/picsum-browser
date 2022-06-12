import React from "react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";

import { screen, renderWithRouter, render, waitFor } from "../../test-utils";
import {createMemoryHistory} from "history";
import server, {photos1, photos2} from "../../api/mockServer";
import App from "../../App";

describe("As a user,", ()=>{
  beforeAll( () => server.listen() );
  afterEach( () => server.resetHandlers() );
  afterAll(  () => server.close() );

  it("I want to be able to search through the list of images.", async ()=>{
    const history = createMemoryHistory(),
          user = userEvent.setup();
    
    renderWithRouter(<App />, history );

    // Initial load
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    
    // First page
    const nextLink = await screen.findByText(/Next/i);
    expect(nextLink).toHaveAttribute("href");
    expect(screen.getByText(`by ${photos1[2].author}`)).toBeInTheDocument();
    expect(screen.queryAllByText(`by ${photos1[0].author}`)).toHaveLength(2);
    expect(screen.queryByText(`by ${photos2[0].author}`)).not.toBeInTheDocument();    
    expect(screen.queryAllByRole("img")).toHaveLength(4);    
    await user.click(nextLink);

    // Second page    
    const prevLink = await screen.findByText(/Prev/i);  
    expect(screen.queryByText(`by ${photos2[0].author}`)).toBeInTheDocument();
    expect(screen.queryByText(`by ${photos2[1].author}`)).toBeInTheDocument();
    expect(screen.queryByText(`by ${photos2[2].author}`)).toBeInTheDocument();
    expect(screen.queryAllByRole("img")).toHaveLength(4);
  });

  it("I want to click an image and navigate to its editor",async ()=>{
    const history = createMemoryHistory(),
          user = userEvent.setup();

    renderWithRouter(<App />, history );
    
    const [ _, firstImage ] = await screen.findAllByRole("img");
    await user.click(firstImage);        
    expect(screen.getByTestId("editable-image")).toHaveAttribute("src", `https://picsum.photos/id/${photos1[0].id}/600/400`);    
    await waitFor(()=>{
      expect(screen.getAllByRole("slider")).toHaveLength(3);
    });
    expect(screen.getAllByRole("checkbox")).toHaveLength(1);
  });
  
  it("I want to be able to edit image that I can download",async ()=>{
    const history = createMemoryHistory(),
          user = userEvent.setup();
    
    renderWithRouter(<App />, history );
    
    const [ _, firstImage ] = await screen.findAllByRole("img");
    await user.click(firstImage);    
    
    const widthSlider = await screen.findByLabelText("Width"),
          heightSlider = screen.getByLabelText("Height"),
          blurSlider = screen.getByLabelText("Blur"),
          grayscaleCheck = screen.getByLabelText("Grayscale");

    fireEvent.change(widthSlider, {target: {value: 900}});
    fireEvent.change(heightSlider, {target: {value: 800}});
    fireEvent.change(blurSlider, {target: {value: 3}});    
    await user.click(grayscaleCheck);
    
    await waitFor(()=>{
      expect(screen.getByTestId("editable-image")).toHaveAttribute("src", `https://picsum.photos/id/${photos1[0].id}/900/800?grayscale&blur=3`);      
    });
  });
});

