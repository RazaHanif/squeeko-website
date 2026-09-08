const OnboardingForm = () => {
    const [value, setValue] = useState(30)

    return (
       <div className="flex flex-col justify-center gap-4 p-4 rounded-xl border border-primary-foreground bg-primary w-3/4 lg:w-1/4">
            <div className="flex flex-col justify-center gap-4 w-full">
                <div className="flex flex-col gap-2 w-full justify-center">
                    <Label htmlFor="max-capacity" className="px-2">
                        Whats your max child capacity
                    </Label>
                    <div className="flex flex-row gap-4 justify-center items-center p-2 bg-secondary rounded-xl px-4">
                        <Slider 
                            className="flex-5"
                            value={value}
                            onValueChange={(value) => setValue(value)}
                            id="max-capacity"
                            min={0}
                            max={100} 
                            step={1} 
                        />
                        <p className="flex-1 text-end text-primary">{value}</p> 
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OnboardingForm