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
                'desc' =>'Voici un exemple d\'installation Wordpress que j\'ai effectuée avec des plugins personnalisez !',
                'icon' =>'wordpress-simple',
                'brand'=>'fab',
                'link' =>'http://nicolas-gretten.fr:8081'
            ],
            [
                'index' => 2,
                'image' =>'/img/oni.png',
                'gif' => '/img/oni.png',
                'name' =>'E-boutique',
                'desc' =>'Je vous présente la boutique réaliser lors de ma formation de développeur web et web mobile.',
                'icon' =>'shopping-cart',
                'brand'=>'fas',
                'link' =>'http://nicolas-gretten.fr:8082'
            ],
            [
                'index' => 3,
                'image' => '/img/screen.png',
                'gif' => '/img/avoizejotatttoo.gif',
                'name' =>'Avoizejotattoo.lu',
                'desc' =>'Lors de mon stage j\'ai eu la chance de pouvoir réaliser le site internet pour le salon de tatouage Avoize & Jo Tatto Studio.',
                'icon' =>'code',
                'brand'=>'fas',
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
                'image' =>'/img/Mastermind_cover.png',
                'name' =>'Mastermind',
                'desc' =>'Mastermind en JavaScript',
                'icon' =>'dice-one',
                'brand' =>'fas',
                'link' =>'http://nicolas-gretten.fr:8084'
            ],
            [
                'index' => 2,
                'image' =>'/img/morpion_cover.png',
                'name' =>'Morpion',
                'desc' =>'Morpion en JavaScript',
                'icon' =>'dice-two',
                'brand' =>'fas',
                'link' =>'http://nicolas-gretten.fr:8083'
            ],
            [
                'index' => 3,
                'image' =>'/img/keycode_cover.png',
                'name' =>'Key code',
                'desc' =>'Keycode en JavaScript',
                'icon' =>'dice-three',
                'brand' =>'fas',
                'link' =>'http://nicolas-gretten.fr:8085'
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
                'image' =>'/img/mobile/screen.png',
                'name' =>'avoizejotattoo.lu',
                'desc' =>'Maquettage version mobile pour le site avoizejotattoo.lu avec dialogue écrans.',
                'icon' =>'palette',
                'brand' =>'fas',
                'size' =>'',
                'content'=>['/img/mobile/Maquettage_AvoizeJos-01.png','/img/mobile/Maquettage_AvoizeJos-02.png','/img/mobile/Maquettage_AvoizeJos-03.png',
                '/img/mobile/Maquettage_AvoizeJos-04.png','/img/mobile/Maquettage_AvoizeJos-05.png','/img/mobile/Maquettage_AvoizeJos-06.png',
                '/img/mobile/Maquettage_AvoizeJos-07.png','/img/mobile/Maquettage_AvoizeJos-08.png','/img/mobile/Maquettage_AvoizeJos-09.png',
                '/img/mobile/Maquettage_AvoizeJos-10.png','/img/mobile/Maquettage_AvoizeJos-11.png','/img/mobile/Maquettage_AvoizeJos-12.png',
                '/img/mobile/Maquettage_AvoizeJos-13.png',]
            ],
            [
                'index' => 2,
                'image' =>'/img/desktop/Maquettage_AvoizeJos_Version_Desktop-01.png',
                'name' =>'avoizejotattoo.lu',
                'desc' =>'Maquettage du Front-end pour le site avoizejotattoo.lu avec dialogue écrans.',
                'icon' =>'palette',
                'brand' =>'fas',
                'size' =>'modal-xl',
                'content'=>['/img/desktop/Maquettage_AvoizeJos_Version_Desktop-01.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-02.png',
                '/img/desktop/Maquettage_AvoizeJos_Version_Desktop-03.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-04.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-05.png',
                '/img/desktop/Maquettage_AvoizeJos_Version_Desktop-06.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-07.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-08.png',
                '/img/desktop/Maquettage_AvoizeJos_Version_Desktop-09.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-10.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-11.png',
                '/img/desktop/Maquettage_AvoizeJos_Version_Desktop-12.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-13.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-14.png',
                '/img/desktop/Maquettage_AvoizeJos_Version_Desktop-15.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-16.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-17.png',
                '/img/desktop/Maquettage_AvoizeJos_Version_Desktop-18.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-19.png','/img/desktop/Maquettage_AvoizeJos_Version_Desktop-20.png',]
            ],
            [
                'index' => 3,
                'image' =>'/img/admin/Maquettage_AvoizeJos_panel_admin-1.png',
                'name' =>'avoizejotattoo.lu',
                'desc' =>'Maquettage du Panel admin pour le site avoizejotattoo.lu avec dialogue écrans.',
                'icon' =>'palette',
                'brand' =>'fas',
                'size' =>'modal-xl',
                'content'=>['/img/admin/Maquettage_AvoizeJos_panel_admin-1.png','/img/admin/Maquettage_AvoizeJos_panel_admin-2.png','/img/admin/Maquettage_AvoizeJos_panel_admin-3.png',
                '/img/admin/Maquettage_AvoizeJos_panel_admin-4.png','/img/admin/Maquettage_AvoizeJos_panel_admin-5.png']
            ],
        ];

    $response = new Response();
    
    $response->headers->set('Content-Type', 'application/json');
    $response->headers->set('Access-Control-Allow-Origin', '*');
    $response->setContent(json_encode($designs));
    return $response;

    }
    /**
     * @Route("/api/cv", name="cv")
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getCv(){
        $cv = [
            [
                'src' =>'/img/Nicolas-gretten.png',
                'title' =>'Cv nicolas gretten avril 2020',
                'description' =>'cv'
            ],
            ];
        $response = new Response();
    
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent(json_encode($cv));
        return $response;

    }

}