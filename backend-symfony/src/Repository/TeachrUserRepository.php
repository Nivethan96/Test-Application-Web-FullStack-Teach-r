<?php

namespace App\Repository;

use App\Entity\TeachrUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TeachrUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method TeachrUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method TeachrUser[]    findAll()
 * @method TeachrUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TeachrUserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TeachrUser::class);
    }

    public function transformUser(TeachrUser $teachrUser)
    {
        return [
            'id'        => (int) $teachrUser->getId(),
            'prenom'    => (string) $teachrUser->getPrenom(),
            'date'      => $teachrUser->getDate()
        ];
    }

    public function transformAllUsers()
    {
        $users = $this->findAll();
        $usersArray = [];

        foreach($users as $user){
            $usersArray[] = $this->transformUser($user);
        }

        return $usersArray;
    }

}
