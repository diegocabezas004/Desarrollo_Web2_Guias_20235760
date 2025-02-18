

export const BudgetForm = () => {
    const [budget, setBudget] = useState(0);
    const isInvalid = isNaN(budget) || budget <= 0;

    const handleChange = (e) => {
        setBudget(Number(e.target.value));
    }
    return(
        <form className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                    Definir presupuesto
                </label>
            </div>
        </form>
    )
}
