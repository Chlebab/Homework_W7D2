import Film from "./Film"

const FilmList = ({filmsProp}) => {

    const filmReactComponents = filmsProp.map((filmInfo) => {
        return(
            <Film key={filmInfo.id}>
                <a href={filmInfo.url}>{filmInfo.name}</a>
            </Film>
        )
    })


    return(
        <div className="filmBoxList">
            <h1>Latest UK film releases</h1>
                <ul>
                    {filmReactComponents}
                </ul>
            <a href = "https://www.imdb.com/calendar/?region=GB" class="link">Visit for more UK releases</a>
        </div>
    )

}

export default FilmList