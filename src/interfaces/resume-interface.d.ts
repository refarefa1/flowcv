export interface Experience {
	_id: string
	employer: string
	jobTitle: string
	city: string
	country: string
	startDate: number
	endDate: number
	[index: string]: any
}

export interface Education {
	_id: string
	degree: string
	school: string
	city: string
	country: string
	description: string
}

export interface Personal {
	fullName: string
	jobTitle: string
	email: string
	phone: string
	address: string
	imgUrl: string
}

export interface Resume {
	_id?: string
	name: string
	components: string[]
	personal?: Personal
	education?: Education[]
	experience?: Experience[]
	[index: string]: any
}
