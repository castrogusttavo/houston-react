import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Kickstarter01Icon({
  iconName = 'kickstarter-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
