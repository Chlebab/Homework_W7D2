import React, {useState} from "react"

const FilmForm = ({addFilmProp}) => {
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }

    const handleUrlChange = (evt) => {
        setUrl(evt.target.value)
    }
    
    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        const nameToSubmit = name.trim()
        if (!nameToSubmit || !url){
            return
        }

        addFilmProp({
            name: nameToSubmit,
            url: url
        })
        setName('')
        setUrl('')

    }
    return(
        <form onSubmit={handleFormSubmit} class="form">
            <input type="text" placeholder="Movie title" value={name} onChange={handleNameChange}/>
            <input type="text" placeholder="Movie url" value={url} onChange={handleUrlChange}/>
            <input type="submit" value="Add Film" className="formButton"/>
        </form>
    )

}
export default FilmForm