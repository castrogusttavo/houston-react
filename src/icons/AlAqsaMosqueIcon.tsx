import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlAqsaMosqueIcon({
  iconName = 'al-aqsa-mosque',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
