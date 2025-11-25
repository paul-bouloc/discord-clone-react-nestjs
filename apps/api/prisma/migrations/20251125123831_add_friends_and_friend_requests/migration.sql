-- CreateEnum
CREATE TYPE "public"."FriendRequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELLED');

-- CreateTable
CREATE TABLE "public"."friendships" (
    "friendshipId" TEXT NOT NULL,
    "user1Id" TEXT NOT NULL,
    "user2Id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "friendships_pkey" PRIMARY KEY ("friendshipId")
);

-- CreateTable
CREATE TABLE "public"."friend_requests" (
    "friendRequestId" TEXT NOT NULL,
    "requesterId" TEXT NOT NULL,
    "addresseeId" TEXT NOT NULL,
    "status" "public"."FriendRequestStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "friend_requests_pkey" PRIMARY KEY ("friendRequestId")
);

-- CreateIndex
CREATE UNIQUE INDEX "friendships_user1Id_user2Id_key" ON "public"."friendships"("user1Id", "user2Id");

-- CreateIndex
CREATE UNIQUE INDEX "friend_requests_requesterId_addresseeId_key" ON "public"."friend_requests"("requesterId", "addresseeId");

-- AddForeignKey
ALTER TABLE "public"."friendships" ADD CONSTRAINT "friendships_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "public"."users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."friendships" ADD CONSTRAINT "friendships_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "public"."users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."friend_requests" ADD CONSTRAINT "friend_requests_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "public"."users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."friend_requests" ADD CONSTRAINT "friend_requests_addresseeId_fkey" FOREIGN KEY ("addresseeId") REFERENCES "public"."users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
