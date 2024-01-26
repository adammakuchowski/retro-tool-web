import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {NewRetrospective} from '../features/retrospective/pages/newRetrospective/NewRetrospective'
import {RetrospectiveBoard} from '../features/retrospective/pages/retrospectiveBoard/RetrospectiveBoard'
import {Home} from '../features/general/pages/home/Home'

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-retrospective" element={<NewRetrospective />} />
        <Route path="/retrospective/:id" element={<RetrospectiveBoard />} />
      </Routes>
    </BrowserRouter>
  )
}
