import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = 'https://cdn-icons-png.flaticon.com/512/25/25223.png'
const upIcon = 'https://cdn-icons-png.flaticon.com/512/54/54785.png'
const noneIcon = 'https://i.absurdopedia.net/thumb/e/ea/%D0%A2%D0%B8%D1%80%D0%B5_2.png/300px-%D0%A2%D0%B8%D1%80%D0%B5_2.png'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    }else if(sort){
        return down
    }else{
        return down
    }
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                style={{display:'flex',width:'30px'}}
                id={id + '-icon-' + sort}
                src={icon}
                alt={'sort not found'}
            />
        </span>
    )
}

export default SuperSort
