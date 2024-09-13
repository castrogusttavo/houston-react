import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Simcard02Icon({
  iconName = 'simcard-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
