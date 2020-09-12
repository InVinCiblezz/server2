<?php
/**
 * This is project's console commands configuration for Robo task runner.
 *
 * @see http://robo.li/
 */
class RoboFile extends \Robo\Tasks
{
    // define public methods as commands
    public function dev()
    {
        $this->_exec("cd web && yarn start & cd api && yarn start");
    }
}