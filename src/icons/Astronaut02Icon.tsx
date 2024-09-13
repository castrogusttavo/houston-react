import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Astronaut02Icon({
  iconName = 'astronaut-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
