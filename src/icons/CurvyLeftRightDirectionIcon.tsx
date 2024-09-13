import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CurvyLeftRightDirectionIcon({
  iconName = 'curvy-left-right-direction',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
