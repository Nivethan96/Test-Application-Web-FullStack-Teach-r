<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Stats;
use App\Repository\StatsRepository;

use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class StatsController
{
    /**
    * @Route("/show-stats", methods="GET")
    */
    public function index(StatsRepository $statsRepository)
    {
        // Read stats table in database and store all into a variable using transformAllStats()
        $stats = $statsRepository->transformAllStats();
        // Return the variable in JSON format, which could be displayed on a web browser
        return new JsonResponse($stats);
    }
}