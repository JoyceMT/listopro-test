import React from 'react'
import './CandidateCard.css'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBriefcase, faUniversity, faCog, faGlobe, faCircle, faCommentDots, faMoneyBillWaveAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const CandidateCard = () => {
  return (
    <div>
      <div className="candidate-card">

        <div className="left-container">
          <div className="image-container">
            <img src="https://avatars.githubusercontent.com/u/66332712?v=4" alt="avatar" className="avatar"></img>
          </div>
          <div>
            <h2 className="candidate-name">Maximiliano, <span>31</span></h2>
          </div>
          <div>
            <p><span className="label"><FontAwesomeIcon icon={faStar} /> Interesado</span></p>
          </div>
          <div className="university">
            <p>FES Acatlán</p>
            <p>(2005-2009)</p>
          </div>
          <div className="studies">
            <p>Ing. Electrónica</p>
            <p>Universitario</p>
          </div>
          <div>
            <Button buttonColor={'transparent linear-gradient(255deg, #0C88BF 0%, #504AD6 100%) 0% 0% no-repeat padding-box'} text={'Ver Perfil'}/>
          </div>
        </div>


        <div className="middle-container">
          <div className="experience">
            <div className="icon">
              <p><FontAwesomeIcon icon={faStar} className="green"/></p>
              <p className="title-experience">+5 años de experiencia como:</p>
            </div>
            <div className="content">
              <p>Vendedor Corporativo, Key Account</p>
              <p>Ejectuvo de ventas telefónico - Sky (2011-2018)</p>
            </div>
          </div>
          <div className="experience">
            <div className="icon">
              <p><FontAwesomeIcon icon={faBriefcase} className="green"/></p>
              <p className="title-experience">Última Experiencia Laboral</p>
            </div>
            <div className="content">
              <p>Ejectuvo de ventas telefónico - Sky (2011-2018)</p>
            </div>
          </div>
          <div className="experience">
            <div className="icon">
              <p><FontAwesomeIcon icon={faUniversity} className="green"/></p>
              <p className="title-experience">Ha trabajado en:</p>
            </div>
            <div className="content">
              <p>Sky, Uber, Resuelve tu Deuda</p>
            </div>
          </div>
          <div className="experience">
            <div className="icon">
              <p><FontAwesomeIcon icon={faCog} className="green"/></p>
              <p className="title-experience">Habilidades</p>
            </div>
            <div className="content">
              <p>Aspel, MS Office, Adobe Photoshop</p>
            </div>
          </div>
          <div className="experience">
            <div className="icon">
              <p><FontAwesomeIcon icon={faGlobe} className="green"/></p>
              <p className="title-experience">Idiomas</p>
            </div>
            <div className="content">
              <p>Inglés (Profesional Técnico), Español (Nativo)</p>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="right-menu">
            <p><FontAwesomeIcon icon={faEllipsisV} className="gray"/></p>
          </div>
          <div className="salary-exp">
            <div className="icon">
              <p><FontAwesomeIcon icon={faMoneyBillWaveAlt} className="green"/></p>
              <p className="title-experience">Aceptando ofertas entre</p>
            </div>
            <div className="content">
              <p className="price-title"> 30,000 - 50,000 MXN</p>
            </div>
            <div className="see-more">
              <a href="" className="green-link">Ver más</a>
            </div>
          </div>
          <div className="buttons">
            <Button buttonColor={'transparent linear-gradient(255deg, #33BF54 0%, #38D6AC 100%) 0% 0% no-repeat padding-box'} text={'Solicitar Información'}/>
            <Button buttonColor={'transparent linear-gradient(255deg, #E88600 0%, #FFAE14 100%) 0% 0% no-repeat padding-box'} text={'Aprobar'}/>
          </div>
        </div>

      </div>
    </div>

  )
}

export default CandidateCard
