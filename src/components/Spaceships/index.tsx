import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Masonry } from 'react-masonry-component2'
import request from '../../util/request'
import { getIdFromUrl, clientId } from '../../util/getId'

export interface ISpaceship {
  name: string
  model: string
  manufacturer: string
  url: string
  MGLT: string
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  crew: string
  hyperdrive_rating: string
  length: string
  passengers: string
  max_atmosphering_speed: string
  starship_class: string
  pilots: string[]
}

const { Meta } = Card
const url =
  'https://api.unsplash.com/search/photos?page=1&query=' + 'starship' + '&client_id=' + clientId

const Spaceships: React.FC = () => {
  const [spaceships, setSpaceships] = useState<ISpaceship[]>([])
  let navigate = useNavigate()
  const [images, setImages] = useState([])
  useEffect(() => {
    if (!images.length) {
      request({
        method: 'get',
        url,
      }).then(resp => {
        const response = resp.results.map((img: { urls: { thumb: string } }) => img.urls.thumb)
        setImages(response)
      })
    }
  }, [])
  useEffect(() => {
    if (!spaceships.length) {
      request({
        method: 'get',
        url: '/starships',
      }).then((resp: { results: React.SetStateAction<ISpaceship[]> }) => {
        setSpaceships(resp.results)
      })
    }
  }, [])
  const handleClick = (id: string) => {
    navigate(`/${id}`, { state: { id } })
  }
  return (
    <div>
      <Masonry
        direction="column"
        columnsCountBreakPoints={{
          1400: 4,
          1000: 3,
          700: 2,
          500: 1,
        }}
      >
        {spaceships?.map((ship: ISpaceship, index: number) => {
          const id = getIdFromUrl(ship.url)
          return (
            <Card
              hoverable
              style={styles.card}
              cover={
                <img alt={ship.name} src={images[index] + '?fm=jpg&w=300&h=600&fit=facearea'} />
              }
              onClick={() => handleClick(id)}
            >
              <Meta title={ship.name} description={ship.model} />
            </Card>
          )
        })}
      </Masonry>
    </div>
  )
}

const styles = {
  card: {
    width: 300,
    marginBottom: 20,
  },
}

export default Spaceships
