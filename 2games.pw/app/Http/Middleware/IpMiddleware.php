<?php 

namespace VanguardDK\Http\Middleware;



class IpMiddleware {
    public function handle($request, \Closure $next)
    {
        $ips = explode("\n", settings("ips"));
        $ipn = array(  );
        foreach( $ips as $ip ) 
        {
            if (trim($ip) != "" ) 
            {
                $ipn[] = trim($ip);
            }
        }
        if (count($ipn) && !in_array($request->ip(), $ipn) ) 
        {
            $response = \Response::json(array( "error" => "IP not in White List" ), 401, array(  ));
            $response->header("Content-Type", "application/json");
            return $response;
        }
        return $next($request);
    }
}


