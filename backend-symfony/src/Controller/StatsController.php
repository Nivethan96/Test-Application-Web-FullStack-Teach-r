<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\TeachrUser;
use App\Entity\Stats;

use App\Repository\TeachrUserRepository;
use App\Repository\StatsRepository;

use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class StatsController extends ApiController
{
    /**
    * @Route("/stats", methods="GET")
    */
    public function index(StatsRepository $statsRepository)
    {
        $stats = $statsRepository->transformAllStats();

        return $this->respond($stats);
    }
}