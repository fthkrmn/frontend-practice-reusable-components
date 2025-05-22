import React from "react"
import classnames from "classnames"

export default function Badge({ children, is_pill, color }) {
    let typeClass = is_pill && `pill`
    let colorClass = color && `badge-${color}`
    const allClasses = classnames(`badge`, typeClass, colorClass)
    return (
        <span className={allClasses}>
            {children}
        </span>
    )
}