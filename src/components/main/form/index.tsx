import React from 'react'
import { Label } from './label'
import { Input } from './input'

export const Form: React.FC = () => {
    return (
        <form>
            <Label text='O que você quer adicionar?' targeting='input1' />
            <Input />
        </form>
    )
}