import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Speaker01Icon({
  iconName = 'speaker-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
