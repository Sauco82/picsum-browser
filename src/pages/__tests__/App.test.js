import React from "react";
import { screen, renderWithRouter, render } from "../../test-utils";
import {createMemoryHistory} from "history";

import App from "../../App";

describe("Main App", ()=>{
  it("renders gallery", async () => {
    const history = createMemoryHistory(),
          { getByText } = renderWithRouter(<App />, history );
  
    expect(getByText(/Gallery/i)).toBeInTheDocument();  
  });
  
  it("renders image", async ()=>{
    const history = createMemoryHistory();
    
    history.push("/1");    
    renderWithRouter( <App />, history);
    expect(screen.getByText(/Image/i)).toBeInTheDocument();    
  });

  it("navigates", ()=>{
    const history = createMemoryHistory();
        
    renderWithRouter( <App />, history);    
    expect(screen.getByText(/Gallery/i)).toBeInTheDocument();  
    
    history.push("/1");
    renderWithRouter( <App />, history);    
    expect(screen.getByText(/Image editor 1/i)).toBeInTheDocument();  
    
    history.push("/2");    
    renderWithRouter( <App />, history);
    expect(screen.getByText(/Image editor 2/i)).toBeInTheDocument();              
  });
});

