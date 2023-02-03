import User from "../interfaces/user.interface"
import { storageService } from "./storage.service"
import { utilService } from "./util.service"
import axios from 'axios'

const USER_KEY = 'loggedinUser'

const prod = false
const BASE_URL = prod ? '/api/user/' : 'http://localhost:3000/api/user/'

async function query() {
    // This call should check if there is a user already logged in, if so, return the user.
    // try {
    //     return await axios.get(BASE_URL)
    // } catch (err: any) {
    //     throw new Error(err)
    // }

    // For now working hard coded for convenience
    const user = _getUser()
    return user
}

async function save(user: User) {
    // TODO : POST REQUEST FOR /api/user/
    storageService.saveToStorage(USER_KEY, user)
}

function getEmptyUser() {
    const user: User = {
        _id: utilService.makeId(),
        name: 'Guest'
    }
    return user
}

function _getUser() {
    let user: User = storageService.loadFromStorage(USER_KEY)
    if (!user) user = {
        _id: 'u101',
        name: 'Refa',
        email: 'refaelavramov@gmail.com',
        resumes: [
            {
                _id: 'r101',
                name: 'Test resume',
                components: ['resume-personal', 'resume-education', 'resume-profile'],
                personal: {
                    fullName: 'Refael Abramov',
                    jobTitle: 'Fullstack Developer',
                    email: 'refaelavramov@gmail.com',
                    phone: '0538207782',
                    address: 'Givolim 10, Tel Aviv, Israel',
                    imgUrl: 'https://media.licdn.com/dms/image/D4D03AQH1cEZGoS_Khw/profile-displayphoto-shrink_200_200/0/1665660743445?e=1680739200&v=beta&t=yI2mYyIHk0uUcl0fu7u9Z2D7NZmENSjS3IA42Hqmp_c',
                },
                education: [
                    {
                        _id: utilService.makeId(),
                        degree: 'Fullstack Developer',
                        school: 'Coding Academy',
                        city: 'Ramat Gan',
                        country: 'Israel',
                        description: 'blabalblaalblalbalblasdalblalblablalbla'
                    },
                    {
                        _id: utilService.makeId(),
                        degree: 'Graphic Designer',
                        school: 'HackerU',
                        city: 'Tel Aviv',
                        country: 'Israel',
                        description: 'blabalblaalblalbalblalblalblasdfgsdfgsdfgblalbla'
                    },
                ],
                profile: {
                    about: `A junior full stack developer with a strong background in graphic design and exceptional computer skills developed from years of experience`
                }
            }
        ]
    }
    storageService.saveToStorage(USER_KEY, user)
    return user
}

export const userService = {
    query,
    save,
    getEmptyUser
}