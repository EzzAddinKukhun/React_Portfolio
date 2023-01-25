import React from 'react'

export default function Address({name, age, address, phoneNumber, emailAddress}) {
    return (
        <address>
            Name :<b> {name}</b><br />
            Age : <b> {age}</b><br />
            Address : <b> {address}</b><br />
            Phone Number : <b> {phoneNumber} </b><br />
            Email :<b> {emailAddress}</b>
        </address>
    )
}
