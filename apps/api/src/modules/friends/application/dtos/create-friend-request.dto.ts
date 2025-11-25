import { z } from 'zod'

export const CreateFriendRequestDto = z.object({
  addresseeId: z.uuid('Identifiant utilisateur invalide'),
})

export type CreateFriendRequestDto = z.infer<typeof CreateFriendRequestDto>

