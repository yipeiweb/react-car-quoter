import { useCallback, useMemo, useRef } from "react";
import useQuoter from "../hooks/useQuoter"
import { BRANDS, PLANS } from "../constants";

const Result = () => {
    const {result,dates} = useQuoter()
    const {brand, plan, year} = dates
    const yearRef = useRef(year)

    const [brandName] = useMemo( () =>
        BRANDS.filter(item => item.id === Number(brand)), 
        [result]
    )
    const [planName] = useCallback(
        PLANS.filter(item => item.id === Number(plan)),
        [result]
    )

    if (result == 0) return null
  return (
    <div className="bg-gray-100 text-center 
                    mt-5 p-5 shadow">
        <h2 className="text-grat-600 font-black text-3xl">
            Resumen
        </h2>
        <p className="my-2">
            <span className="font-bold">Marca: </span>
            { brandName.name}
        </p>
        <p className="my-2">
            <span className="font-bold">Plan: </span>
            { planName.name}
        </p>  
        <p className="my-2">
            <span className="font-bold">Año del auto: </span>
            { yearRef.current }
        </p>           
        <p className="my-2 text-2xl">
            <span className="font-bold">Total cotización: </span>
            { result }
        </p>           
    </div>
  )
}

export default Result