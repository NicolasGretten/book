<?php
    
namespace App\Controller;
    
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
    
class HomeController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }

        /**
     * @Route("/api/sites", name="sites")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getSites()
    {
        $sites = [
            [
                'index' => 1,
                'image' =>'/img/screen_wordpress.png',
                'gif' =>'/img/screen_wordpress.png',
                'name' =>'Wordpress',
                'desc' =>'Voici un exemple d\'installation Wordpress que j\'ai effectué avec des plugins personnalisez !',
                'icon' =>'fab fa-wordpress',
                'link' =>'http://nicolas-gretten.fr:8081'
            ],
            [
                'index' => 2,
                'image' =>'/img/screen_boutique.png',
                'gif' => '/img/screen_boutique.png',
                'name' =>'E-boutique',
                'desc' =>'Je vous présente la boutique réaliser lors de ma formation de développeur web et web mobile.',
                'icon' =>'fas fa-shopping-cart',
                'link' =>'http://nicolas-gretten.fr:8082'
            ],
            [
                'index' => 3,
                'image' => '/img/screen.png',
                'gif' => '/img/avoizejotatttoo.gif',
                'name' =>'Avoizejotattoo.lu',
                'desc' =>'Lors de mon stage j\'ai eu la chance de pouvoir réaliser le site internet pour le salon de tatouage Avoize & Jo Tatto Studio',
                'icon' =>'fas fa-code',
                'link' =>'https://avoizejotattoo.lu'
            ],
        ];
        $response = new Response();
        
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        
        $response->setContent(json_encode($sites));
        return $response;
    }
    /**
     * @Route("/api/games", name="games")
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getGames()
    {
        $games = [
            [
                'index' => 1,
                'image' =>'https://dummyimage.com/600x400/28d6a5/fff',
                'name' =>'Mastermind',
                'desc' =>'Mastermind en JavaScript',
                'icon' =>'fas fa-dice-one',
                'link' =>'#'
            ],
            [
                'index' => 2,
                'image' =>'https://dummyimage.com/600x400/28d6a5/fff',
                'name' =>'Morpion',
                'desc' =>'Morpion en JavaScript',
                'icon' =>'fas fa-dice-two',
                'link' =>'http://nicolas-gretten.fr:8083'
            ],
            [
                'index' => 3,
                'image' =>'https://dummyimage.com/600x400/28d6a5/fff',
                'name' =>'To Do List',
                'desc' =>'To do list en JavaScript',
                'icon' =>'fas fa-dice-three',
                'link' =>'#'
            ],
    ];

    $response = new Response();
    
    $response->headers->set('Content-Type', 'application/json');
    $response->headers->set('Access-Control-Allow-Origin', '*');

    $response->setContent(json_encode($games));
    
    return $response;
    
    }
    
    /**
     * @Route("/api/designs", name="designs")
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getDesigns()
    {
        $designs = [
            [
                'index' => 1,
                'image' =>'https://dummyimage.com/600x400/2685eb/fff',
                'name' =>'Leduc guitar',
                'desc' =>'Maquettage d\'une application de gestion de commandes pour un luthier.',
                'icon' =>'fas fa-palette',
                'link' =>'#'
            ],
            [
                'index' => 2,
                'image' =>'https://dummyimage.com/600x400/2685eb/fff',
                'name' =>'avoizejotattoo.lu',
                'desc' =>'Maquettage du Front End pour le site avoizejotattoo.lu avec dialogue écrans',
                'icon' =>'fas fa-palette',
                'link' =>'#'
            ],
            [
                'index' => 3,
                'image' =>'https://dummyimage.com/600x400/2685eb/fff',
                'name' =>'avoizejotattoo.lu',
                'desc' =>'Maquettage du Panel admin pour le site avoizejotattoo.lu avec dialogue écrans',
                'icon' =>'fas fa-palette',
                'link' =>'#'
            ],
        ];

    $response = new Response();
    
    $response->headers->set('Content-Type', 'application/json');
    $response->headers->set('Access-Control-Allow-Origin', '*');
    $response->setContent(json_encode($designs));
    return $response;

    }

}