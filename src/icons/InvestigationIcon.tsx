import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InvestigationIcon({
  iconName = 'investigation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
