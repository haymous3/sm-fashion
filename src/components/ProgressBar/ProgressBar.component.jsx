// import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./ProgressBar.styles.scss"

const CheckoutprogressBar = ({step}) => {
    return(
        <ProgressBar
        percent={(step - 1) * 100 / 3}
        filledBackground="linear-gradient(to right, #c92c61, #c92c67)"
      >
        <Step transition="scale">
          {({ accomplished, index }) => (
            <span className={`step ${accomplished ? 'completed' : ""}`}>
             1
             <p> Cart</p>
            </span>
            
          )}
         
        </Step>
        
        <Step transition="scale">
          {({ accomplished, index }) => (
            <span className={`step ${accomplished ? 'completed' : ""}`}>
            2
            <p>Details</p>
            </span>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <span className={`step ${accomplished ? 'completed' : ""}`}>
            3
            <p>Payment</p>
            </span>
          )}
        </Step>
        <Step transition="scale">
        {({ accomplished, index }) => (
          <span className={`step ${accomplished ? 'completed' : ""}`}>
          4
          <p>Review</p>
          </span>
        )}
      </Step>
      </ProgressBar>
    )
}

export default CheckoutprogressBar 



 