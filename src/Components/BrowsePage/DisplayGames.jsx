import { DisplayGamesList } from "./DisplayGamesList"
import { Filter } from "./Filter"

export const DisplayGames = () => {
  return (
    <>
    <div className="flex flex-row ">
        <DisplayGamesList/>
        <Filter/>
    </div>
    </>
  )
}
