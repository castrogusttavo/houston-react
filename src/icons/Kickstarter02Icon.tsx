import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Kickstarter02Icon({
  iconName = 'kickstarter-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
