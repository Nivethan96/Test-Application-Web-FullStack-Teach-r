<?php

namespace App\Repository;

use App\Entity\Stats;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Stats|null find($id, $lockMode = null, $lockVersion = null)
 * @method Stats|null findOneBy(array $criteria, array $orderBy = null)
 * @method Stats[]    findAll()
 * @method Stats[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Stats::class);
    }

    public function transformStats(Stats $stat)
    {
        return [
            'compteur'  => (int) $stat->getCompteur(),
        ];
    }

    public function transformAllStats()
    {
        $stats = $this->findAll();
        $statsArray = [];

        foreach($stats as $stat){
            $statsArray[] = $this->transformStats($stat);
        }

        return $statsArray;
    }
}
