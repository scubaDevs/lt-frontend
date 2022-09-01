import React from "react"

// type das informações de seleção dos horários disponíveis para execução das atividades
export type IdValueType = {
    id: number,
    value?: string,
    name?: string

}
export type AvailableTimeProps = {

    handle: (e: React.ChangeEvent<HTMLInputElement>, checkedItem: IdValueType[], setCheckedItem: React.Dispatch<React.SetStateAction<IdValueType[]>>) => Promise<void>;
}



