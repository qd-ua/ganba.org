import prisma from '@/lib/prisma'
import { Contact, File, People } from '@prisma/client'

export async function usePeoplesWithContacts(): Promise<(People & { contacts: Contact[] })[]> {
    return await prisma.people.findMany({
        include: {
            contacts: true,
        },
    })
}

export async function usePeopleWithFilesContacts(id: number): Promise<(People & { contacts: Contact[], files: File[] }) | null> {
    return await prisma.people.findUnique({
        where: {
            id,
        },
        include: {
            files: true,
            contacts: true,
        },
    })
}