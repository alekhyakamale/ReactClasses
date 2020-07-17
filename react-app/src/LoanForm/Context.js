import React, {  useState } from "react";

const FormContext = React.createContext();


const FormProvider = (props) => {
   
    const [page, setPage] = useState(1)
    const [submittedValues, setSubmittedValues] = useState({})

    const nextPage = () => {
        setPage(2)
      };
    const prevPage = () => {
        setPage(1);
      };
    
    const handleStartOver = () => {
        setPage(1);
        setSubmittedValues([]);
    };

        return (
            <FormContext.Provider
            value = {{
                page,
                setPage,
                submittedValues,
                setSubmittedValues,
                nextPage,
                prevPage,
                handleStartOver
            }}
            >
                {props.children}
            </FormContext.Provider>
        )
    }

    export {FormContext, FormProvider}
