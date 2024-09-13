import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CovidInfoIcon({
  iconName = 'covid-info',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
