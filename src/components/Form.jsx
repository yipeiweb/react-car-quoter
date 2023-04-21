import { Fragment } from "react";
import { BRANDS, YEARS, PLANS } from "../constants/index";
import useQuoter from "../hooks/useQuoter";
import Error from "./Error";

const Form = () => {
   const {
       dates, error, 
       setError, handleChangeDates, quoterInsurance
    } = useQuoter();

   const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(dates).includes('')){
        setError('Todos los campos son obligatorios')
        return
    }

    setError('')
    quoterInsurance()
   }
  return (
    <>
        {error && <Error />}
        <form onSubmit={ e => handleSubmit(e)}>
            <div className="my-5">
                <label  htmlFor="brand"
                        className="block mb-3 font-bold 
                                text-gray-600 uppercase">
                        Marca
                </label>
                <select name="brand"
                        className='w-full p-3 bg-white border border-gray-200'
                        onChange={e => handleChangeDates(e)} 
                        value={dates.brand}>
                        <option value="">-- Selecciona marca --</option>
                        {BRANDS.map(brand =>(
                            <option 
                            value={brand.id} key={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className="my-5">                
                <label htmlFor="year" 
                    className="block mb-3 font-bold text-gray-600 uppercase">
                        Año
                </label>
                <select name="year"
                        onChange={e => handleChangeDates(e)}
                        value={dates.year} 
                        className='w-full p-3 bg-white 
                                    border border-gray-200'>
                        <option value="">-- Selecciona marca --</option>
                        {YEARS.map(year =>(
                            <option value={year} key={year}>{year}</option>
                        ))}
                </select>
            </div>

            <div className="my-5">                
                <label
                    className="block mb-3 font-bold text-gray-600 uppercase">
                        Plan
                </label>
                <div className="flex gap-3 items-center">
                    {PLANS.map(plan => (
                        <Fragment key={plan.id}> 
                            <label>
                                {plan.name}
                            </label>
                            <input  type="radio" 
                                    name="plan" 
                                    value={plan.id}
                                    onChange={e => handleChangeDates(e)} />
                        </Fragment>
                    ))}
                </div>

                <input type="submit" value="Cotizar" 
                    className="w-full bg-sky-500 hover:bg-sky-800
                        transition-colors text-white cursor-pointer
                        p-3 mt-3 uppercase front-bold" />
            </div>
        </form>
    </>
  )
}

export default Form