import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Card, Space, Descriptions } from 'antd'
import { getIdFromUrl, clientId } from '../../util/getId'
import request from '../../util/request'
import { ISpaceship } from '../Spaceships/index'

const Spaceship: React.FC = () => {
  const location = useLocation()
  const params = useParams()
  const [spaceship, setSpaceship] = useState<ISpaceship>({
    name: '',
    model: '',
    manufacturer: '',
    url: '',
    pilots: [],
    MGLT: '',
    cargo_capacity: '',
    consumables: '',
    cost_in_credits: '',
    crew: '',
    hyperdrive_rating: '',
    length: '',
    passengers: '',
    max_atmosphering_speed: '',
    starship_class: '',
  })
  const [images, setImages] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    request({
      method: 'get',
      url: `/starships/${params.id || location.state.id}`,
    }).then((resp: React.SetStateAction<ISpaceship>) => {
      setSpaceship(resp)
    })
  }, [])

  const url = `https://api.unsplash.com/search/photos?page=1&query=pilot&client_id=${clientId}`

  useEffect(() => {
    request({
      method: 'get',
      url,
    }).then(resp => {
      const response = resp.results.map((img: { urls: { thumb: string } }) => img.urls.thumb)
      setImages(response)
    })
  }, [])

  const handleClick = (pilotId: string) => {
    navigate(`/${location.state.id}/${pilotId}`, { state: { pilotId } })
  }
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Descriptions title="Spaceship Info" bordered>
          <Descriptions.Item label="Name">{spaceship.name}</Descriptions.Item>
          <Descriptions.Item label="Model">{spaceship.model}</Descriptions.Item>
          <Descriptions.Item label="MGLT">{spaceship.MGLT}</Descriptions.Item>
          <Descriptions.Item label="Cargo Capacity">{spaceship.cargo_capacity}</Descriptions.Item>
          <Descriptions.Item label="consumables">{spaceship.consumables}</Descriptions.Item>
          <Descriptions.Item label="length">{spaceship.length}</Descriptions.Item>
          <Descriptions.Item label="passengers">{spaceship.passengers}</Descriptions.Item>
          <Descriptions.Item label="starship_class">{spaceship.starship_class}</Descriptions.Item>
          <Descriptions.Item label="max_atmosphering_speed">
            {spaceship.max_atmosphering_speed}
          </Descriptions.Item>
        </Descriptions>
        <div style={styles.container}>
          {spaceship.pilots.map((pilot: string, index: number) => {
            const id = getIdFromUrl(pilot)
            return (
              <Card
                key={id}
                hoverable
                style={styles.card}
                onClick={() => handleClick(id)}
                cover={<img alt={id} src={images[index] + '?fm=jpg&w=300&h=600&fit=facearea'} />}
              >
                {pilot}
              </Card>
            )
          })}
        </div>
      </Space>
    </div>
  )
}

const styles = {
  card: {
    width: 240,
    marginBottom: 20,
  },
  container: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'auto auto auto',
    alignContent: 'center',
    justifyContent: 'center',
    gridGap: 30,
  },
}

export default Spaceship
