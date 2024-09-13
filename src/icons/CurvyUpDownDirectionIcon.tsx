import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CurvyUpDownDirectionIcon({
  iconName = 'curvy-up-down-direction',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
