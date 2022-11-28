import React from "react";
import UglyForm from "./AddUglyForm";
import { UglyFormProvider } from "./Context";

export default function App (props) {
    return(
        <div>
            <UglyFormProvider>
                <UglyForm />
            </UglyFormProvider>
        </div>
    )
}