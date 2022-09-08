import React, {useState, useEffect} from 'react';

const SerchComponent = () => {

    const [aves, setAves] = useState([])
    const [search, setSearch] = useState("")


    const baseUrl = "https://aves.ninjas.cl/api/birds"

    const showData = async () => {
        const response = await fetch(baseUrl)
        const data = await response.json()
        setAves(data)
    }

const searcher = (e) => {
    setSearch(e.target.value)
}

const results = !search ? aves : aves.filter((dato)=> dato.name.spanish.toLowerCase().includes(search.toLocaleLowerCase()))
  
useEffect( ()=> {
 showData()
}, [])

    return (
        <div>
            <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso'>
                        <th>Nombre Español</th>
                        <th>Nombre Latin</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((ave) => (
                        <tr key={ave.uid}>
                            <td>{ave.name.spanish}</td>
                            <td>{ave.name.latin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SerchComponent