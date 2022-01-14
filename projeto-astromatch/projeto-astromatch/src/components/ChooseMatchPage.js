import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const Image = styled.img`
    width: 60%;
`

const Body = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

const FooterBotoes = styled.div`
    width: 20vw;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

const axiosConfig = { headers: {'content-type': 'application/json'} }

const ChooseMatchPage = () => {
    const [profile, setProfile] = useState({})
    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const choosePerson = (idMatch) => {
        const bodyDados = {
            id: idMatch,
            choice: true
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', bodyDados, axiosConfig)
        .then((res) => {
            alert('Deu Match!')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <Body> 
            <Image src={profile.photo} />
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
            <FooterBotoes>
                <ClearIcon onClick={getProfileToChoose} sx={{ fontSize: 50, color: 'red', cursor: 'pointer' }} />
                <FavoriteIcon onClick={() => choosePerson(profile.id) } sx={{ fontSize: 50, color: 'green', cursor: 'pointer' }} />
        </FooterBotoes>
        </Body>
    )
}

export default ChooseMatchPage
