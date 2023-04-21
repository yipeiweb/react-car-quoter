import { useState, createContext } from "react";
import { getYearDiff, brandCalc, planCalc, moneyFormater } from "../helpers";
const QuoterContext =  createContext()

const QuoterProvider = ({children}) => {
    const [dates, setDates] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const handleChangeDates = e => {
        setDates({
            ...dates,
            [e.target.name]: e.target.value
        })
    }
    const quoterInsurance = () => {
        //La base
        let result = 2000 
        //Calcular diferencia de años
        let diff = getYearDiff(dates.year) 
        //Formula de restar el 3% por cada año
        result -= ((diff * 3) * result) / 100
        //Europeo 30% Americano 15% Asiatico 5%
        result *= brandCalc(dates.brand)
        //Basico 20% Completo 50%
        result *= planCalc(dates.plan)
        //Devolver resultado formateado en euro
        result = moneyFormater(result)
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setResult(result)
        }, 2000);
    }

    return (
        <QuoterContext.Provider
            value={{
                dates,
                error,
                result,
                isLoading,
                setError,
                handleChangeDates,
                quoterInsurance,
            }}>
            {children}
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}

export default QuoterContext