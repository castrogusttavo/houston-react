import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Astronaut01Icon({
  iconName = 'astronaut-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
