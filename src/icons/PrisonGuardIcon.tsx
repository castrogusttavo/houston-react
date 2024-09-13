import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PrisonGuardIcon({
  iconName = 'prison-guard',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
