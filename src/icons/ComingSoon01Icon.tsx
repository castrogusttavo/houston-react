import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ComingSoon01Icon({
  iconName = 'coming-soon-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
