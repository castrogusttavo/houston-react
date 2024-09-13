import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Loading01Icon({
  iconName = 'loading-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
