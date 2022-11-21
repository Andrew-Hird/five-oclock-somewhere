import React, { useEffect, useState } from 'react'
import { getTimeZones } from "@vvo/tzdb"

const Timezone = () => {
    const [message, setMessage] = useState<string>();
    
    useEffect(() => {
        // get time, round time to current hour
        const d = new Date()
        const currentHour = d.getHours()

        const currentTz = Intl.DateTimeFormat().resolvedOptions().timeZone

        // get timezone offset in minutes and invert it
        const tzOffset = -(d.getTimezoneOffset())

        // add or subtract to get offset where it may be 5 o'clock
        const tzAhead = ((17 - currentHour) * 60) + tzOffset // works for after 5pm
        const tzBehind = ((17 - currentHour) * 60) - tzOffset + 120 // TODO: check this

        // get all timezones
        const timezones = getTimeZones()

        // match timezones excluding current timezone
        const matchingTimezones = timezones.filter(tz => 
            (tz.currentTimeOffsetInMinutes === tzAhead || 
            tz.currentTimeOffsetInMinutes === tzBehind) &&
            tz.name !== currentTz
        )
        if (!matchingTimezones?.length && currentHour !== 17) {
            setMessage("It's not five o'clock anywhere 😢")
        } else {
            const randomTz = matchingTimezones[Math.floor(Math.random() * matchingTimezones.length)]
            const city = randomTz.mainCities[Math.floor(Math.random() * randomTz.mainCities.length)]
            if (currentHour === 17) {
                setMessage(`It's five o-clock where you are 😏,\nand also in ${city}, ${randomTz.countryName}!`)
            } else {
                setMessage(`It's five o-clock in \n${city}, ${randomTz.countryName}!`)
            }
        }
    }, [])

    return (
        <div className="flex flex-col h-screen items-center justify-center text-center">
            <h1 className="text-5xl">🍻 It's five o'clock<br />somewhere!! 🍻</h1>
            <p className="mt-12 px-2 text-2xl whitespace-pre-line">{message}</p>
        </div>
    )
}

export default Timezone;
